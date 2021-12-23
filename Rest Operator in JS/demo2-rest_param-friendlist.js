//Rest Oprator -> ..., Rest Parameter -> remainingFriends
const friendsList = (
  firstFriend,
  secondFriend,
  thirdFriend,
  ...remainingFriends
) => {
  console.log(`First friend: ${firstFriend}`);
  console.log(`Second friend: ${secondFriend}`);
  console.log(`Third friend: ${thirdFriend}`);
  //Above output prints first three friends
  //below loop prints remaining friends from rest parameter.
  console.log('Remaining friends are as follows:');
  remainingFriends.forEach((friend) => {
    console.log(friend);
  });
};

friendsList(
  'Sourav',
  'Nihar',
  'Rakesh',
  'Ashutosh',
  'Subhakant',
  'Priyaranjan',
  'Ashish'
); //rest parameter captures last four arguments
friendsList('Pratyush', 'Shantanu', 'Suraj', 'Jayant', 'Subhrajyoti'); //rest parameter captures last two arguments.
friendsList('Nanda', 'Harsh', 'Zia', 'Abhinav'); //rest parameter captures last 1 argument
friendsList('Shivendra', 'Akash', 'Shubham', 'Sharath', 'Dipali', 'GG'); //rest parameter captures last three arguments
