import type { Autor } from "@/types/autor";
import type { FC } from "react";

import { PageHeader } from "../ui/PageHeader";
import { PageSection } from "../ui/PageSection";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { extractTextFromPDF } from "@/utils/extractTextFromPDF";
import { extractTextFromDOCX } from "@/utils/extractTextFromDocs";

interface AutorHomepageProps {
  user: Autor | undefined;
}

export const AutorHomepage: FC<AutorHomepageProps> = ({ user }) => {
  const submissionSchema = yup.object().shape({
    title: yup.string().required("Název příspěvku je povinný."),
    file: yup
      .mixed()
      .required("Soubor je povinný.")
      .test("fileFormat", "Podporované formáty jsou PDF a DOCX.", (value) => {
        return value && ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(value[0]?.type);
      }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(submissionSchema),
  });

  const onSubmit = async (data) => {
    const file = data.file[0];
    let fileText = "";

    if (file.type === "application/pdf") {
      const text = await extractTextFromPDF(file);
      fileText = text;
    } else if (file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
      const text = await extractTextFromDOCX(file);
      fileText = text;
    }

    await fetch(`https://admin.scrumgeniuses.cloud/items/Clanek/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: "Odeslano",
        nazev: data.title,
        autor: user?.id,
        text_clanku: fileText,
      }),
    })
      .then(() => {
        alert(`Successfuly sent`);
      })
      .catch(() => {
        alert("Error during sent.");
      });
  };

  return (
    <main className="pt-[4px]">
      <PageHeader
        title={`Vítej, ${user?.jmeno.toUpperCase()}!`}
        description="Tato stránka je věnovaná tobě. Zde můžeš spravovat své příběhy, sledovat statistiky a sdílet své myšlenky se světem. 
  Jsi klíčovou součástí Scrum Geniuses a my jsme tu, abychom ti pomohli dosáhnout tvých cílů a inspirovat ostatní."
      />

      <PageSection
        title="Podání článku"
        wrapperClassname="max-w-[800px] w-full"
        content={
          <form onSubmit={handleSubmit(onSubmit)} className="py-4 flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium">Název příspěvku</label>
              <input type="text" {...register("title")} className="mt-1 px-2 block w-full border border-gray-300 rounded-md" />
              {errors.title && <p className="text-red-600">{errors.title.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium">Plný text příspěvku (PDF nebo DOCX)</label>
              <input type="file" {...register("file")} accept=".pdf, .docx" className="mt-1 block w-full" />
              {errors.file && <p className="text-red-600">{errors.file.message}</p>}
            </div>

            <button type="submit" className="px-4 py-2 bg-primary text-white rounded-md">
              Odeslat příspěvek
            </button>
          </form>
        }
      />
    </main>
  );
};
