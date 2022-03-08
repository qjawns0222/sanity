import CodeInput from "./components/CodeInput";

export default {
  name: "code",
  title: "Code",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "language",
      tilte: "Language",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "code",
      tilte: "Code",
      type: "string",
      validation: (Rule) => Rule.required(),
      inputComponent: CodeInput,
    },
  ],
};
