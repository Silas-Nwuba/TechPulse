import supabase from "./supabase";
export const getAllPost = async () => {
  const { data, error } = await supabase
    .from("post")
    .select("*")
    .order("createdDate", { ascending: false });
  if (error) {
    throw new Error("Please check internet connection");
  }
  return data;
};
