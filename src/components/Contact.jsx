import { Component } from "react";

class Contact extends Component {
  state = {};
  render() {
    return (
        <div id="contact" className="flex flex-col justify-center items-center top-0 h-full w-full gap-6 pointer-events-none mb-96">
            <h1 className="handwritten text-7xl text-center mb-6">Get in touch </h1>
            <div className="flex flex-row gap-8 pointer-events-auto">

            <a href="https://www.facebook.com/phlawlessDev" className="bg-white w-32 h-32"><img src={'svg/facebook.svg'}/></a>
            <a href="https://www.linkedin.com/in/phlawless-development" className="bg-white w-32 h-32"><img src={'svg/linkedin.svg'}/></a>
            <a href="https://github.com/phlawlessDevelopment" className="bg-white w-32 h-32"><img src={'svg/github.svg'}/></a>
            </div>
            <h1 className="handwritten text-4xl text-center my-6">Or just send me an email</h1>
            <a href="mailto:sales@phalycedevelopment.co.uk">sales@phalycedevelopment.co.uk</a>
   
    </div>
    )
}
}

export default Contact;