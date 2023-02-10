import query from "../db/db.js";


export async function getAllUserTrips(userID) {
    console.log(userID)
  const allTrips = await query(
    "SELECT * from trip INNER JOIN trip_members ON trip.trip_id = trip_members.trip_id WHERE trip_members.member_id = $1",
    [userID]
  );

  return allTrips.rows;
}


export async function getSingleTrip(tripID) {
  const trip = await query(
    "SELECT * from trip INNER JOIN trip_members ON trip.trip_id = trip_members.trip_id WHERE trip.trip_id = $1",[tripID]);

  return trip.rows;
}