import { Select, Input } from "antd";
import { Search01Icon, Tag01Icon } from "hugeicons-react";

interface SearchAndFilterProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
  availableTags: string[];
  resultCount: number;
}

export function SearchAndFilter({
  searchQuery,
  setSearchQuery,
  selectedTags,
  setSelectedTags,
  availableTags,
  resultCount,
}: SearchAndFilterProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Search Input */}
        <div className="relative">
          <Input
            size="large"
            placeholder="Search projects by name or keyword..."
            prefix={<Search01Icon className="text-gray-400" size={20} />}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="rounded-xl"
          />
        </div>
        
        {/* Tags Filter */}
        <div className="relative">
          <Select
            mode="multiple"
            size="large"
            placeholder="Filter by technologies"
            value={selectedTags}
            onChange={setSelectedTags}
            className="w-full"
            suffixIcon={<Tag01Icon className="text-gray-400" size={20} />}
            maxTagCount="responsive"
          >
            {availableTags.map(tag => (
              <Select.Option key={tag} value={tag}>
                {tag}
              </Select.Option>
            ))}
          </Select>
        </div>
      </div>
      
      {/* Results Counter */}
      <div className="mt-4 text-sm text-gray-500">
        {resultCount} {resultCount === 1 ? 'project' : 'projects'} found
      </div>
    </div>
  );
}