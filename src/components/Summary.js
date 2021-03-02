const Summary = () => {
  // const [];

  return (
    <div className="summary container mx-auto p-6">
      <table class="table-auto w-full text-left">
        <thead>
          <tr>
            <th class="w-1/2">Title</th>
            <th class="w-1/4">Author</th>
            <th class="w-1/4">Views</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Intro to CSS</td>
            <td>Adam</td>
            <td>858</td>
          </tr>
          <tr class="bg-blue-200">
            <td>A Long and Winding Tour.</td>
            <td>Adam</td>
            <td>112</td>
          </tr>
          <tr>
            <td>Intro to JavaScript</td>
            <td>Chris</td>
            <td>1,280</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Summary;
