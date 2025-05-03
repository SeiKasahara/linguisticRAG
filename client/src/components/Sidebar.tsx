interface FilterOption {
    label: string;
    value: string;
  }
  
  const Sidebar: React.FC = () => {
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    const languageOptions: FilterOption[] = [
      { label: '英语', value: 'en' },
      { label: '汉语', value: 'zh' },
      // ...
    ];
  
    return (
      <aside className="w-64 p-4 bg-gray-50 border-r">
        <h2 className="text-xl font-semibold mb-4">过滤条件</h2>
        {/* 渲染 Select 或 Checkbox 列表 */}
      </aside>
    );
  };
  
  export default Sidebar;