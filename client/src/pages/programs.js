import Navbar from '../components/Navbar'
import Grid from '../components/Grid'
import './styles.css'

export default function Programs() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <h5 class="headline">PROGRAMS</h5>
            </div>
            <div class="grid-container">
                <Grid />
            </div>
        </div>
    )
}