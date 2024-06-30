import { Content_Per_Page, Post_Per_Page } from "../util/constant";
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
export const getLatestPostPerPage = async ({ pageParam = 1 }) => {
  const currentDate = new Date().toISOString().split("T")[0];
  const { data, error } = await supabase
    .from("post")
    .select("*")
    .gte("createdDate", `${currentDate}T00:00:00.000Z`)
    .lte("createdDate", `${currentDate}T23:59:59.999Z`)
    .range((pageParam - 1) * Post_Per_Page, pageParam * Post_Per_Page - 1);
  if (error) throw new Error("Error in fetching data");
  return data;
};
export const getPostArticlePerPage = async ({ pageParam = 0, category }) => {
  const { data, error } = await supabase
    .from("post")
    .select("*")
    .eq("category", `${category}`)
    .range(
      pageParam * Content_Per_Page,
      pageParam * Content_Per_Page + Content_Per_Page - 1
    );
  if (error) throw new Error("Error in fetching data");
  return data;
};
