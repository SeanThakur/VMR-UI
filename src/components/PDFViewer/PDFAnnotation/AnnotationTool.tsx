import React, { useEffect, useState } from "react";
import ViewSDKClient from "./ViewSDKClient";

const PDFAnnotationTools: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const viewSDKClient = new ViewSDKClient();

      viewSDKClient.ready().then(() => {
        viewSDKClient.previewFile("pdf-div", {
          showAnnotationTools: true,
          enableFormFilling: true,
        });

        viewSDKClient.registerSaveApiHandler();
      });
    }
  }, [isClient]);

  return isClient ? <div id="pdf-div" className="full-window-div" /> : null;
};

export default PDFAnnotationTools;
