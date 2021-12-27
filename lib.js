export const log = async (filename) => {
  const text = await Deno.readTextFile(filename);
  console.log(text);
};
