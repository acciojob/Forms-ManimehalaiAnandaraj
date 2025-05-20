import Card from "./Card";

export default function Form() {
  return (
    <Card>
      <form id="info-form">
        <div>
          <label>Full Name:</label>
          <input type="text" id="full_name" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" id="password" />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" id="password_confirmation" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}
