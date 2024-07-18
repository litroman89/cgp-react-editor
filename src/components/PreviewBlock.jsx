import React from "react";

export default function PreviewBlock({ name, data }) {
  switch (name) {
    case "Headline": {
      return (
        <h2 className="text-center text-[22px] leading-normal text-[#252a32]">
          {data}
        </h2>
      );
    }
    case "Paragraph": {
      return (
        <p className="mx-auto max-w-[572px] text-center text-[14px] leading-normal text-[#97aacd]">
          {data}
        </p>
      );
    }
    case "button": {
      return (
        <button className="mx-auto block rounded bg-blue-500 px-4 py-2 text-[14px] text-white transition hover:bg-blue-700">
          {data}
        </button>
      );
    }
    case "image": {
      return <img src={data} alt="" className="h-[230px] object-cover" />;
    }
  }
}
