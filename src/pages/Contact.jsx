import { React } from "react";
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import styles from "../style";
import "../index.css"
import ReactWhatsapp from "react-whatsapp";
import Footer from "../components/Footer";
import { PiClockBold, PiMapPin, PiMapPinFill, PiPhoneCall } from "react-icons/pi"
import { MdCall, MdEmail } from "react-icons/md";

const SERVICE_ID = "service_pcqs6uq";
const TEMPLATE_ID = "template_95sq7eo";
const USER_ID = "utzc-1oTb6tx2UGHi";

const Contact = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };
    return (
      <section className={`flex flex-col`}>
          <div className={`gap-20 flex flex-col pt-10`}>
            <div className={`${styles.paddingX} ${styles.paddingY} gap-20 flex md:flex-row flex-col py-10`}>
              <div className={`${styles.flexStart} flex flex-col gap-4 py-40 px-20 bg-black`}>
                <div className={`${styles.flexStart} flex flex-col gap-4 `}>
                  <h2 className={`${styles.heading2} text-white`}>
                    Let's Start a Project
                  </h2>
                  <p className={`${styles.paragraph} mt-4 max-w-[312px] text-white`}>
                    Give us a call or drop by anytime. We endeavour to answer all enquiries within 24hrs. We will be happy to answer your questions.
                  </p>              
                </div>
                <div className="py-10 flex md:flex-row flex-col justify-center items-start md:gap-40 gap-20">
                  <div className={`${styles.flexStart} flex flex-col gap-4`}>
                    <div className="flex flex-row gap-4 items-start">
                      <PiMapPinFill size={24} color={'white'} />
                      <div className="flex flex-col gap-2">
                        <h4 className="font-poppins font-bold text-[18px] leading-[27px] text-white">Office Address</h4>
                        <h4 className="font-poppins font-regular text-[14px] leading-[27px] text-white">6th floor, Arusha trade centre tower, sokoine road , levolosi ward, postal code 23104</h4>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4 items-start">
                      <MdEmail size={24} color={'white'} />
                      <div className="flex flex-col gap-2">
                        <h4 className="font-poppins font-bold text-[18px] leading-[27px] text-white">Mail</h4>
                        <h4 className="font-poppins font-regular text-[14px] leading-[27px] text-white">info@hosphcaresolutionsltd.co.tz </h4>                 
                        <h4 className="font-poppins font-regular text-[14px] leading-[27px] text-white">sales@hosphcaresolutionsltd.co.tz </h4> 
                      </div>
                    </div>                
                  </div>

                  <div className={`${styles.flexStart} flex flex-col gap-4`}>
                    <div className="flex flex-row gap-4 items-start">
                      <PiClockBold size={24} color={'white'} />
                      <div className="flex flex-col gap-2">
                        <h4 className="font-poppins font-bold text-[18px] leading-[27px] text-white">Working Hours</h4>
                        <h4 className="font-poppins font-regular text-[14px] leading-[27px] text-white">8.00AM - 5.00PM (Mon-Fri)</h4>
                        <h4 className="font-poppins font-regular text-[14px] leading-[27px] text-white">(Sat) 8.00AM - 12.00PM </h4>
                        <h4 className="font-poppins font-regular text-[14px] leading-[27px] text-white">Closed on Sun & Holidays  </h4>
                      </div>
                    </div>

                    <div className="flex flex-row gap-4 items-start">
                      <MdCall size={24} color={'white'} />
                      <div className="flex flex-col gap-2">
                        <h4 className="font-poppins font-bold text-[18px] leading-[27px] text-white">Phone</h4>
                        <h4 className="font-poppins font-regular text-[14px] leading-[27px] text-white">+255792996709</h4>
                        <ReactWhatsapp number="+254 729327268" className="border border-1 bg-green-600 px-4 py-2 border-rounded-md text-white" message="Hello, I would like to know more about what your company offers.">Get A Quote</ReactWhatsapp>
                      </div>
                    </div>
                    
                  </div>      
                </div>
              </div>

              <div className={`flex flex-col min-w-[250px] max-w-[450px]`}>
                <div className={`${styles.flexStart} flex flex-col gap-4 py-6 `}>
                  <h2 className={`${styles.heading2} text-black`}>
                    Send us an email
                  </h2>
                  <p className={`${styles.paragraph} mt-4 max-w-[312px] text-black`}>
                    Drop us an email enquiry and we will responds as soon as possible.
                  </p>              
                </div>
                <Form onSubmit={handleOnSubmit}>
                  <Form.Field
                    id='form-input-control-email'
                    control={Input}
                    name='user_email'
                    placeholder='Email…'
                    required
                    icon='mail'
                    iconPosition='left'
                  />
                  <Form.Field
                    id='form-input-control-last-name'
                    control={Input}
                    name='user_name'
                    placeholder='Name…'
                    required
                    icon='user circle'
                    iconPosition='left'
                  />
                  <Form.Field
                    id='form-input-control-last-name'
                    control={Input}
                    name='Phone Number'
                    placeholder='Phone Number'
                    required
                    icon='phone'
                    iconPosition='left'
                  />
                  <Form.Field
                    id='form-input-control-email'
                    control={Input}
                    name='Loaction'
                    placeholder='Location'
                    required
                    icon='pin'
                    iconPosition='left'
                  />
                  <Form.Field
                    id='form-input-control-email'
                    control={Input}
                    name='Subject'
                    placeholder='Subject'
                    required
                    icon='mail'
                    iconPosition='left'
                  />
                  <Form.Field
                    id='form-textarea-control-opinion'
                    control={TextArea}
                    name='user_message'
                    placeholder='Your Message…'
                    required
                  />
                  <Button type='submit' color='blue'>Submit</Button>
                </Form>
              </div>   
            </div>
            
          </div>  

          <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10`}>
            {/* gradient start */}
            <div className=" w-[40%] h-[35%] top-0 pink__gradient" />
            <div className=" w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
            <div className=" w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
            {/* gradient end */}
          </div> 
              
          <Footer />
        
      </section>    
    );
};
export default Contact;

