/* eslint-disable @typescript-eslint/no-explicit-any */
/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it. If you have received this file from a source other than Adobe,
then your use, modification, or distribution of it requires the prior
written permission of Adobe.
*/

type AdobeDCViewType = {
  previewFile: (fileConfig: any, viewerConfig: any) => Promise<void>;
  registerCallback: (
    callbackType: string,
    callbackFunction: (event: any) => void,
    options: Record<string, unknown>
  ) => void;
};

type MetaDataType = {
  [key: string]: any;
  updatedAt?: number;
};
type ContentType = any;
type OptionsType = any;

type SaveApiHandlerEventType = {
  metaData: MetaDataType;
  content: ContentType;
  options: OptionsType;
};

declare global {
  interface Window {
    AdobeDC: any;
  }
}

class ViewSDKClient {
  private readyPromise: Promise<void>;
  private adobeDCView?: AdobeDCViewType;

  constructor() {
    this.readyPromise = new Promise((resolve) => {
      if (typeof window !== "undefined" && window.AdobeDC) {
        resolve();
      } else {
        /* Wait for Adobe Acrobat Services PDF Embed API to be ready */
        document.addEventListener("adobe_dc_view_sdk.ready", () => {
          resolve();
        });
      }
    });
  }

  public ready(): Promise<void> {
    return this.readyPromise;
  }

  public previewFile(
    divId: string,
    viewerConfig: any
  ): Promise<void> | undefined {
    const config: { clientId: string; divId?: string } = {
      /* Pass your registered client id */
      clientId: "56e28b187e4646f4bba0f16063cc523c",
    };
    if (divId) {
      /* Optional only for Light Box embed mode */
      /* Pass the div id in which PDF should be rendered */
      config.divId = divId;
    }

    if (typeof window !== "undefined" && window.AdobeDC) {
      /* Initialize the AdobeDC View object */
      this.adobeDCView = new window.AdobeDC.View(config);

      /* Check if adobeDCView is defined before calling previewFile */
      if (this.adobeDCView) {
        /* Invoke the file preview API on Adobe DC View object */
        const previewFilePromise = this.adobeDCView.previewFile(
          {
            /* Pass information on how to access the file */
            content: {
              /* Location of file where it is hosted */
              location: {
                url: "https://acrobatservices.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf",
              },
            },
            /* Pass meta data of file */
            metaData: {
              /* file name */
              fileName: "Bodea Brochure.pdf",
              /* file ID */
              id: "6d07d124-ac85-43b3-a867-36930f502ac6",
            },
          },
          viewerConfig
        );

        return previewFilePromise;
      }
    }
  }

  public previewFileUsingFilePromise(
    divId: string,
    filePromise: Promise<ArrayBuffer>,
    fileName: string
  ): void {
    if (typeof window !== "undefined" && window.AdobeDC) {
      /* Initialize the AdobeDC View object */
      this.adobeDCView = new window.AdobeDC.View({
        /* Pass your registered client id */
        clientId: "56e28b187e4646f4bba0f16063cc523c",
        /* Pass the div id in which PDF should be rendered */
        divId,
      });

      /* Invoke the file preview API on Adobe DC View object */
      if (this.adobeDCView) {
        this.adobeDCView.previewFile(
          {
            /* Pass information on how to access the file */
            content: {
              /* pass file promise which resolves to arrayBuffer */
              promise: filePromise,
            },
            /* Pass meta data of file */
            metaData: {
              /* file name */
              fileName: fileName,
            },
          },
          {}
        );
      }
    }
  }

  public registerSaveApiHandler(): void {
    if (this.adobeDCView) {
      /* Define Save API Handler */
      const saveApiHandler = (event: SaveApiHandlerEventType) => {
        const { metaData, content, options } = event;
        console.log(metaData, content, options);
        return new Promise((resolve) => {
          setTimeout(() => {
            const response = {
              code: window.AdobeDC.View.Enum.ApiResponseCode.SUCCESS,
              data: {
                metaData: Object.assign(metaData, {
                  updatedAt: new Date().getTime(),
                }),
              },
            };
            resolve(response);
          }, 2000);
        });
      };

      this.adobeDCView.registerCallback(
        window.AdobeDC.View.Enum.CallbackType.SAVE_API,
        saveApiHandler,
        {}
      );
    }
  }

  public registerEventsHandler(): void {
    if (this.adobeDCView) {
      /* Register the callback to receive the events */
      this.adobeDCView.registerCallback(
        /* Type of callback */
        window.AdobeDC.View.Enum.CallbackType.EVENT_LISTENER,
        /* Callback function */
        (event) => {
          console.log(event);
        },
        /* Options to control the callback execution */
        {
          /* Enable PDF analytics events on user interaction. */
          enablePDFAnalytics: true,
        }
      );
    }
  }
}

export default ViewSDKClient;
