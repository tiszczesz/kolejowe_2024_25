

const MyForm = () => {
  const handleSubmit = (formData: FormData) => {
    console.log(formData);
  };

  return (
    <form action={handleSubmit}>
      <div className="row m-2">
        <label htmlFor="firstname" className="col-3 text-end">
          First Name
        </label>
        <input type="text" className="col-6" id="firstname" name="firstname" />
      </div>
      <div className="row m-2">
        <label htmlFor="lastname" className="col-3 text-end">
          Last Name
        </label>
        <input type="text" className="col-6" id="lastname" name="lastname" />
      </div>
      <div className="row m-2">
        <label htmlFor="email" className="col-3 text-end">
          Email
        </label>
        <input type="email" className="col-6" id="email" name="email" />
      </div>
      <input className="offset-3 col-6 btn btn-primary" type="submit" value="Save" />
    </form>
  );
};

export default MyForm;
