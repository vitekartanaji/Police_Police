import img1 from '../images/sp/contact-sp.png';
import img2 from '../images/sp/quote.svg';
import '../components/sppune.css';

export const Sppune = () => {
  return (
    <div className='container-fluid mt-5'>
        <div className='row sprow'>

        <div className='col'>
            <img src={img1} width="320px" height="320px" className='img1'/>
        </div>

        <div className='col'>
            <img src={img2} width="85px" height="50px" className='img21'/>
        </div>
        <div className='col-6'>
            <div className='content_1'>
            <h1>भेट प्रमुखांची</h1>
            <div className='content_2'>
            <p>नमस्कार, पुणेकर.</p>
            <p>आपले पुणे शहर, एक प्रमुख आयटी आणि शैक्षणिक केंद्र आहे जे अशा <text>सुजाण आणि सुशिक्षित</text> <br/>
                नागरिकांचे घर आहे ज्यांचा प्रशासनातील सर्व स्तरांवर सक्रिय सहभाग घेण्यावर विश्वास आहे. मी <br/>
                पुण्याच्या पोलीस दलाचे प्रमुख ह्या नात्याने जबाबदारी घेतो आणि हे सुनिश्चित करू इच्छितो की आम्ही <br/>
                जमिनीचा कायदा निष्पक्षपणे, दृढतापुर्वक आणि भीती किंवा पूर्वग्रह न ठेवता लागू करू. आम्ही<br/>
                 आपल्या सुंदर शहराच्या वाढीसाठी आणि विकासासाठी एक <text>भयमुक्त वातावरण</text> निर्माण करण्याचा<br/>
                प्रयत्न करू.</p>
            <p>
            गुन्हे रोखणे, प्रतिबंध करणे आणि ते उघडकीस आणणे हे आमचे ध्येय आहे. ते साध्य करण्यासाठी,<br/>
            आम्ही या <text>चार विस्तृत क्षेत्रांवर</text> लक्ष केंद्रित करतो : अग्रगण्य पोलीस खाते (फ्रंटलाईन पोलिसिंग),<br/>
             सामुदायिक प्रतिबद्धता (कम्युनिटी एंगेजमेंट), सर्वसमावेशक तपास आणि तंत्रज्ञानाचा वापर.
            </p>
            <p>माझी अशी इच्छा आहे कि पुणे पोलीस <text>सदैव तुमच्या सेवेत हजर</text> आहेत ह्याची खात्री बाळगावी.</p>
            </div>
            <br/>
            <div className='spname'>
                <p><b>श्री. रितेश कुमार आयपीएस, पोलीस आयुक्त, पुणे शहर</b></p>
            </div>
        </div>
        </div>
            </div>        
    </div>
  )
}