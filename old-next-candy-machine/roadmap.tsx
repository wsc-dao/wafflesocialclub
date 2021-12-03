import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("../components/pdf-viewer"), {
  ssr: false
});

const roadmap = () => {
    return (  
        <div>
            <h1>roadmap</h1>
            <p>Test</p>
            <p>Tests</p>
        </div>


    );
}
 
export default function PDF() {
    return <PDFViewer />;
  }