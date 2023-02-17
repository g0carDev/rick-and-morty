import ListItem from '@mui/material/ListItem'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'

export const ItemFilter = ({
  formLabel = '',
  formValue = '',
  onChange,
  radios = []
}) => {
  return (
    <ListItem>
      <FormControl>
        <FormLabel id='searchBy'>{formLabel}</FormLabel>
        <RadioGroup
          aria-labelledby={formLabel}
          name={formLabel}
          value={formValue}
          onChange={onChange}
        >
          {
                        radios.map(({ value, label }) => (
                          <FormControlLabel key={value + value} value={value} control={<Radio />} label={label} />
                        ))
                    }
        </RadioGroup>
      </FormControl>
    </ListItem>
  )
}
