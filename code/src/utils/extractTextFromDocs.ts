import mammoth from "mammoth";

export const extractTextFromDOCX = async (file) => {
  const arrayBuffer = await file.arrayBuffer();
  const { value } = await mammoth.extractRawText({ arrayBuffer });
  return value;
};
