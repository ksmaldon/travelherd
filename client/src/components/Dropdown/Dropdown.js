import '../../styling/Dropdown.css'
export default function Dropdown(){
    return (
      <div class="custom-select">
        <select name="category" id="category-select">
          <option value="">--Please choose a category</option>
          <option value="date">Date</option>
          <option value="budget">Budget</option>
          <option value="accommodation">Accommodation</option>
          <option value="activity">Activity</option>
          <option value="food">Food</option>
        </select>
        
      </div>
    );
}