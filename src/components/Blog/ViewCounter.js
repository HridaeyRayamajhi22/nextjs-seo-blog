"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React, { useEffect, useState } from "react";

const supabase = createClientComponentClient();

const ViewCounter = ({ slug, noCount, showCount = true }) => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const incrementAndFetch = async () => {
      try {
        // Call the increment function (returns updated count)
        let { data, error } = await supabase.rpc("increment", {
          slug_text: slug,
        });

        if (error) {
          console.error(error);
        } else {
          setViews(data);
        }
      } catch (error) {
        console.error("An error occurred while incrementing the views", error);
      }
    };

    if (!noCount) {
      incrementAndFetch();
    } else {
      // If we're not incrementing, just fetch the existing count
      const fetchViews = async () => {
        let { data, error } = await supabase
          .from("views")
          .select("count")
          .eq("slug", slug)
          .single();

        if (error) {
          console.error(error);
        } else {
          setViews(data ? data.count : 0);
        }
      };

      fetchViews();
    }
  }, [slug, noCount]);

  if (!showCount) return null;

  return <div>{views}</div>;
};

export default ViewCounter;
