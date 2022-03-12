import Head from "next/head";
import {getDocument, GlobalWorkerOptions, version} from "pdfjs-dist";
import React, {useEffect, useRef} from "react";
import {Footer} from "../../../components/Footer";
import {Header} from "../../../components/Header";

GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${version}/pdf.worker.min.js`;

export async function getStaticProps() {
  return {props: {}}
}

const Roadmap = () => {
  let renderedPdf;
  const pageRenderRef = useRef<HTMLDivElement>(null)
  const DEFAULT_SCALE = 1;

  useEffect(() => {
    console.log("load PDF");
    downloadPDFFromURL("/Litepaper_WSC-SQ.pdf");
  });

  const downloadPDFFromURL = (url: any) => {
    const xhrObj = new XMLHttpRequest();
    xhrObj.open("GET", url, true);
    xhrObj.responseType = "blob";

    xhrObj.addEventListener("loadstart", loadStartFunction, false);
    //xhrObj.addEventListener("progress", progressFunction, false);
    xhrObj.addEventListener("error", downloadError, false);
    xhrObj.addEventListener("timeout", downloadTimeout, false);
    xhrObj.addEventListener("abort", downloadAbort, false);

    xhrObj.onreadystatechange = async () => {
      try {
        if (xhrObj && xhrObj.status === 400) {
          console.log("download error");
        } else {
          if (xhrObj && xhrObj.readyState === XMLHttpRequest.DONE) {
            console.log("download complete");
            const pdfData = await convertBlobToBase64(xhrObj.response);
            loadPDFWithBlob(pdfData);
          }
        }
      } catch (error) {
        console.error("File upload exception: ", error);
      }
    };

    xhrObj.send(null);
  };

  const loadStartFunction = () => {
    console.log("File download started");
  };

  const downloadError = () => {
    console.log("Network Error!");
  };

  const downloadTimeout = () => {
    console.log("Network Timeout!");
  };

  const downloadAbort = () => {
    console.log("Upload Aborted!");
  };

  const loadPDFWithBlob = (pdfData: any) => {
    const encodedData = pdfData.split(",");
    if (encodedData[1] !== undefined) {
      const pdfbase64 = atob(encodedData[1]);
      showPDFInCanvas(pdfbase64);
    }
  };

  const showPDFInCanvas = async (pdfData: string) => {
    const loadingTask = getDocument({data: pdfData});
    await loadingTask.promise.then(
      (pdf: any) => {
        renderedPdf = pdf;
        const container = pageRenderRef.current;
        const pageNo = 0;
        fetchPageNo(pageNo, renderedPdf, container);
      },
      () => {
        console.log("PDF error");
      }
    );
  };

  const fetchPageNo = async (pageNo: any, pdf: any, container: any) => {
    if (pageNo < pdf._pdfInfo.numPages) {
      pageNo += 1;
      console.log(pageNo);
      createContextForCanvas(pdf, container, pageNo).then((page) => {
        fetchPageNo(page, pdf, container);
      });
    }
  };

  const createContextForCanvas = async (pdf: { getPage: (arg0: any) => Promise<any>; }, container: any, pageNo: any) => {
    return new Promise((resolve) => {
      pdf.getPage(pageNo).then(async (page) => {
        const viewport = page.getViewport({scale: DEFAULT_SCALE});

        let canvasInHTML = {
          canvas: undefined as any,
          ctx: undefined as any
        };

        const li = document.createElement("div");
        li.setAttribute("id", "page-" + (page._pageIndex + 1));
        li.setAttribute("style", "position: relative;");

        canvasInHTML.canvas = document.createElement("canvas");
        canvasInHTML.ctx = canvasInHTML.canvas.getContext("2d");

        canvasInHTML.canvas.height = viewport.height;
        canvasInHTML.canvas.width = viewport.width;

        li.appendChild(canvasInHTML.canvas);
        container.appendChild(li);

        const renderContext = {
          canvasContext: canvasInHTML.ctx,
          viewport
        };

        let renderTask = page.render(renderContext);

        renderTask.promise.then(() => {
          if (pageNo !== null) {
            resolve(pageNo);
          }
        });

        if (pageRenderRef.current) {
          pageRenderRef.current.appendChild(li);
        }

      });
    });
  };

  const convertBlobToBase64 = (data: BlobPart) => {
    return new Promise((resolve, reject) => {
      let fileReader = new FileReader();
      data = new Blob([data], {type: "application/pdf"});
      fileReader.onload = () => {
        const result = fileReader.result;
        try {
          //fileReader = null; // clear file reader
          resolve(result);
        } catch (e) {
          //fileReader = null; // clear file reader
          reject(e);
        }
      };
      fileReader.readAsDataURL(data);
    });
  };

  return (
    <>
      <Head>
        <title>Roadmap | Waffle Social Club</title>
        <style>{`
          canvas{
            margin: auto;
            display: block;
            width: 100%;
          `}
        </style>
      </Head>
      <Header home={true}/>
      <div ref={pageRenderRef} style={{background: '#231f20', padding: '80px 0 0'}}/>
      <Footer/>
    </>
  );
};

export default Roadmap;
