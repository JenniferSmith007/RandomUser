export default function UserSummary(currentUser) {
  console.log(currentUser);
  return (
    <div>
      {currentUser.userdata === null ? (
        `no message`
      ) : (
        <div>
          <img src={currentUser.userdata.picture.large} alt="" />
          <p>
            Name : {currentUser.userdata.name.first},{" "}
            {currentUser.userdata.name.last}
          </p>
          <p>Email: {currentUser.userdata.email}</p>
        </div>
      )}
      {/* {currentUser.userdata.gender}
      {currentUser.userdata.name.first}
      {currentUser.userdata.name.last}
      <img src={currentUser.userdata.picture.large} alt="" />
       */}
    </div>
  );
}
