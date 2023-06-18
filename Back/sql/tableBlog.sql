-- Table: public.Blogs

-- DROP TABLE IF EXISTS public."Blogs";

CREATE TABLE IF NOT EXISTS public."Blogs"
(
    id integer NOT NULL,
    titulo character varying COLLATE pg_catalog."default" NOT NULL,
    tiempo_lectura integer NOT NULL,
    img character varying COLLATE pg_catalog."default" NOT NULL,
    
    CONSTRAINT "Blogs_pkey" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Blogs"
    OWNER to postgres;