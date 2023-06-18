-- TABLA VENTAS 
-- public.ventas definition

-- Drop table

-- DROP TABLE public.ventas;

CREATE TABLE public.ventas (
	id serial4 NOT NULL,
	userid int4 NOT NULL,
	category varchar NULL,
	description varchar NULL,
	brand varchar NULL,
	size varchar NULL,
	color varchar NULL,
	sex varchar NULL,
	img1 varchar NULL,
	img2 varchar NULL,
	img3 varchar NULL,
	img4 varchar NULL,
	valid bool NULL DEFAULT false
);


-- public.ventas foreign keys

ALTER TABLE public.ventas ADD CONSTRAINT ventas_fk FOREIGN KEY (userid) REFERENCES public.usuarios(id);