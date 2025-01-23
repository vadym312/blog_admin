import * as z from 'zod';

export const CategoryEnum = z.enum([
  'INJECTIONS',
  'TRAITEMENTS_DE_LA_PEAU',
  'RAJEUNISSEMENT_ANTI_AGE',
  'AVANT_APRES_TEMOIGNAGES',
  'CONSEILS_EDUCATION',
  'ACTUALITES_INNOVATIONS',
  'PHILOSOPHIE_BIEN_ETRE',
]);

export const postSchema = z.object({
  title: z.string().min(1, "Title is required"),
  excerpt: z.string().min(1, "Excerpt is required"),
  content: z.string().min(1, "Content is required"),
  image: z.string().optional(),
  imageAlt: z.string().optional(),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  category: z.enum(["INJECTIONS", "TRAITEMENTS_DE_LA_PEAU", "RAJEUNISSEMENT_ANTI_AGE", "AVANT_APRES_TEMOIGNAGES", "CONSEILS_EDUCATION", "ACTUALITES_INNOVATIONS", "PHILOSOPHIE_BIEN_ETRE"]),
  published: z.boolean(),
});

export type Category = z.infer<typeof CategoryEnum>;