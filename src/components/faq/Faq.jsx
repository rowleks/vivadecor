import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import AddIcon from '@mui/icons-material/Add';

function Faq() {
  return (
    <div className='faq'>
      <Accordion    style={{borderTop: "none",
            borderBottom: "none"
          }}>
        <AccordionSummary
          expandIcon={<AddIcon/>}
          aria-controls="panel1-content"
          id="panel1-header"
       
        >
          Living Room Interior Design
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <br />
      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Commercial office Room Interior Design
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      
    </div>
  )
}

export default Faq
