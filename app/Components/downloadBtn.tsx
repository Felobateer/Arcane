import React, { useEffect, useState } from "react";

interface DownloadLink {
  fileName: string;
  link: string;
}

const DownloadButton = () => {
  const [downloadLinks, setDownloadLinks] = useState<DownloadLink[]>([]);

  useEffect(() => {
    const fetchDownloadLinks = async () => {
      try {
        const response = await fetch("/Games/games");
        const links = await response.json();
        setDownloadLinks(links);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDownloadLinks();
  }, []);

  return (
    <div>
      <h2>Download Java Files:</h2>
      {downloadLinks.map((linkInfo) => (
        <p key={linkInfo.fileName}>
          <a href={linkInfo.link} download={linkInfo.fileName}>
            {linkInfo.fileName}
          </a>
        </p>
      ))}
    </div>
  );
};

export default DownloadButton;
