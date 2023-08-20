import { Check } from '../check'
import {ArrowDownIcon} from "@/ui/icons/arrow-down";
import {Eye} from "@/ui/icons/eye";
import {EyeClosed} from "@/ui/icons/eye-closed";
import {KeyboardArrowLeft} from "@/ui/icons/keyboard-arrow-left";
import KeyboardArrowRight from "@/ui/icons/keyboard-arrow-right";
import {LogOutIcon} from "@/ui/icons/log-out-icon";
import {SearchIcon} from "@/ui/icons/search-icon";

const meta = {
  title: 'Icons/General',
  component: Check,
  tags: ['autodocs'],
}

export default meta
export const AllIcons = {
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Check />
        <ArrowDownIcon />
        <Eye />
        <EyeClosed />
        <KeyboardArrowLeft />
        <KeyboardArrowRight />
        <LogOutIcon />
        <SearchIcon />
      </div>
    )
  },
}
