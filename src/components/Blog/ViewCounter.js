"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React, { useEffect, useState } from "react";

const supabase = createClientComponentClient();

const ViewCounter = ({ slug, noCount = false, showCount = true }) => {
  const [views, setViews] = useState(null);

  useEffect(() => {
    const loadViews = async () => {
      try {
        if (!noCount) {
          // Increment and get the new count
          const { data, error } = await supabase.rpc("increment", {
            slug_text: slug,
          });

          if (error) throw error;
          setViews(data ?? 0);
        } else {
          // Only fetch count
          const { data, error } = await supabase
            .from("views")
            .select("count")
            .eq("slug", slug)
            .maybeSingle(); // safer than .single()

          if (error) throw error;
          setViews(data?.count ?? 0);
        }
      } catch (err) {
        console.error("ViewCounter error:", err.message);
      }
    };

    loadViews();
  }, [slug, noCount]);

  if (!showCount) return null;

  return (
    <span>
       {views !== null ? views : "…"} {views === 1 ? "view" : "views"}
    </span>
  );
};

export default ViewCounter;
