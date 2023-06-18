-- TABLA USUARIOS
-- public.usuarios definition

-- Drop table

-- DROP TABLE public.usuarios;

CREATE TABLE public.usuarios (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1 NO CYCLE),
	nombre varchar NULL,
	email varchar NULL,
	password varchar NULL,
	perfil int4 NOT NULL DEFAULT 2,
	telefono int4 NULL,
	CONSTRAINT pk_usuarios PRIMARY KEY (id)
);