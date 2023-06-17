import "./SelectedTagsList.css";
const SelectedTagsList = ({ selectedTags, handleUnselectTag, handleClear }) => {
  if (selectedTags.length === 0) return null;
  return (
    <div class="filter-tags-c">
      <ul id="filter-tags-list">
        {selectedTags.map((selectedTag) => (
          <li class="tag-filter">
            <p>{selectedTag}</p>
            <span
              class="close-span"
              onClick={() => handleUnselectTag(selectedTag)}
            >
              ×
            </span>
          </li>
        ))}
      </ul>
      <p class="clear-tags" onClick={handleClear}>
        Clear
      </p>
    </div>
  );
};
export default SelectedTagsList;
