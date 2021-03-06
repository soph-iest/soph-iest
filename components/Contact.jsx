const Contact = ({ jp }) => {
  return (
    <div className="contact-div">
      <h1 className="work-header">contact</h1>
      <h4 className="resume-subheader">
        {jp ? "連絡したい方は、" : "for inquiries, please contact me at "}
        <a href="mailto:sophie.a.debs@gmail.com">sophie.a.debs@gmail.com</a>
        {jp
          ? " にメールしてください。"
          : ", and I'll get back to you as soon as I can."}
      </h4>
      <br />
      <h5 className="greyscale-3">
        {jp
          ? "もし興味あれば、Twitterで"
          : "If you want to see my garbage posts, you can also follow me on twitter at "}
        <a href="https://youtu.be/dQw4w9WgXcQ">@nggyu</a>
        {jp
          ? "をフォローできる。"
          : ", but I'll warn you that it's not very interesting."}
      </h5>
    </div>
  );
};

export default Contact;
