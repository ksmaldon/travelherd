import query from "../db/db.js"

export async function createNewTrip(newTrip){
    const trip = await query(
      " INSERT INTO trip (trip_name, admin_id, cover_photo, total_members, trip_join_id,trip_join_password ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        newTrip.trip_name,
        newTrip.admin_id,
        newTrip.cover_photo,
        newTrip.total_members,
        newTrip.trip_join_id,
        newTrip.trip_join_password,
      ]
    );
    return trip.rows

}