import { COOKIE_NAME } from "@shared/const";
import { z } from "zod";
import { getSessionCookieOptions } from "./_core/cookies";
import { notifyOwner } from "./_core/notification";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { createQuoteRequest } from "./db";
import { storagePut } from "./storage";

const quoteInput = z.object({
  name: z.string().min(2).max(160),
  company: z.string().max(220).optional(),
  email: z.string().email().max(320),
  phone: z.string().max(80).optional(),
  projectType: z.string().min(2).max(180),
  projectLocation: z.string().max(220).optional(),
  requiredService: z.string().min(2).max(180),
  projectDetails: z.string().min(10).max(12000),
  deadline: z.string().max(180).optional(),
  attachmentName: z.string().max(255).optional(),
  attachmentType: z.string().max(120).optional(),
  attachmentData: z.string().max(12000000).optional(),
});

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),
  quote: router({
    submit: publicProcedure.input(quoteInput).mutation(async ({ input }) => {
      let attachmentKey: string | undefined;
      let attachmentUrl: string | undefined;
      if (input.attachmentData && input.attachmentName) {
        const raw = input.attachmentData.includes(",") ? input.attachmentData.split(",")[1] : input.attachmentData;
        const safeName = input.attachmentName.replace(/[^a-zA-Z0-9._-]/g, "-").slice(-180);
        const uploaded = await storagePut(`quote-attachments/${Date.now()}-${safeName}`, Buffer.from(raw, "base64"), input.attachmentType || "application/octet-stream");
        attachmentKey = uploaded.key;
        attachmentUrl = uploaded.url;
      }
      const saved = await createQuoteRequest({
        name: input.name,
        company: input.company || null,
        email: input.email,
        phone: input.phone || null,
        projectType: input.projectType,
        projectLocation: input.projectLocation || null,
        requiredService: input.requiredService,
        details: input.projectDetails,
        deadline: input.deadline || null,
        attachmentName: input.attachmentName || null,
        attachmentKey: attachmentKey || null,
        attachmentUrl: attachmentUrl || null,
      });
      const notified = await notifyOwner({ title: `New estimate request from ${input.name}`, content: `${input.company ? `${input.company} · ` : ""}${input.email}\n${input.requiredService} · ${input.projectType}\nDeadline: ${input.deadline || "Not specified"}${attachmentUrl ? `\nAttachment: ${attachmentUrl}` : ""}` }).catch(() => false);
      return { success: saved, notified } as const;
    }),
  }),
});

export type AppRouter = typeof appRouter;
