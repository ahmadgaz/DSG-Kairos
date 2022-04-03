import "./styles.css"

const Table = () => {
  return (
    <div>
      <table>
        <tr>
          <th class="column1" id="header1">DATE</th>
          <th class="column2" id="header2">ATTENDEES</th>
        </tr>
        <tr>
          <td class="column1">Jul 4</td>
          <td class="column2">250</td>
        </tr>
        <tr>
          <td class="column1">Jul 3</td>
          <td class="column2">240</td>
        </tr>
        <tr>
          <td class="column1">Jul 2</td>
          <td class="column2">50</td>
        </tr>
      </table>
    </div>
  )
}

export default Table