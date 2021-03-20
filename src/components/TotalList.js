const TotalList = (props) => {
  const totals = props.totals;
  const title = props.title;
  return (
    <div className="total-list border-t border-gray-200">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
      </div>
      <dl>
        {totals.map((total) => (
          <div className="view-info-separator" key={total.id}>
            <dt className="text-sm font-medium text-gray-500">{total.label}</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {total.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default TotalList;
