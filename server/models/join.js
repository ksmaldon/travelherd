import query from "../db/db.js";

export async function joinTrip(member){
 const password = member.password
 const id = member.trip_id
 const passwordCheck = await query("SELECT trip_join_password FROM trip WHERE trip_id=$1",[id])
  const tripPassword = passwordCheck.rows[0].trip_join_password
  console.log(tripPassword)
  if(password===tripPassword){
    const newMember = await query(
      "INSERT INTO trip_members (trip_id, member_id, first_name, last_name) VALUES ($1, $2, $3, $4) RETURNING *",[member.trip_id, member.member_id, member.first_name, member.last_name]);
      return newMember.rows
  }
    
  console.log( "Incorrect id or password. Please try again")
      
}


export async function getTripID(tripID) {
  const trip = await query("SELECT trip_id FROM trip WHERE trip_join_id = $1", [tripID]);

  return trip.rows; 
}