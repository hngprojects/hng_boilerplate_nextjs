'use client'

import { HERO_SCAN_BUTTON_TEXT, HERO_SCAN_ACTION_TEXT, HERO_ARIA } from '../../constants/hero-content'

function ScanIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M21.375 3.75V7.5C21.375 7.79837 21.2565 8.08452 21.0455 8.2955C20.8345 8.50647 20.5484 8.625 20.25 8.625C19.9516 8.625 19.6655 8.50647 19.4545 8.2955C19.2435 8.08452 19.125 7.79837 19.125 7.5V4.875H16.5C16.2016 4.875 15.9155 4.75647 15.7045 4.5455C15.4935 4.33452 15.375 4.04837 15.375 3.75C15.375 3.45163 15.4935 3.16548 15.7045 2.9545C15.9155 2.74353 16.2016 2.625 16.5 2.625H20.25C20.5484 2.625 20.8345 2.74353 21.0455 2.9545C21.2565 3.16548 21.375 3.45163 21.375 3.75ZM7.5 19.125H4.875V16.5C4.875 16.2016 4.75647 15.9155 4.5455 15.7045C4.33452 15.4935 4.04837 15.375 3.75 15.375C3.45163 15.375 3.16548 15.4935 2.9545 15.7045C2.74353 15.9155 2.625 16.2016 2.625 16.5V20.25C2.625 20.5484 2.74353 20.8345 2.9545 21.0455C3.16548 21.2565 3.45163 21.375 3.75 21.375H7.5C7.79837 21.375 8.08452 21.2565 8.2955 21.0455C8.50647 20.8345 8.625 20.5484 8.625 20.25C8.625 19.9516 8.50647 19.6655 8.2955 19.4545C8.08452 19.2435 7.79837 19.125 7.5 19.125ZM20.25 15.375C19.9516 15.375 19.6655 15.4935 19.4545 15.7045C19.2435 15.9155 19.125 16.2016 19.125 16.5V19.125H16.5C16.2016 19.125 15.9155 19.2435 15.7045 19.4545C15.4935 19.6655 15.375 19.9516 15.375 20.25C15.375 20.5484 15.4935 20.8345 15.7045 21.0455C15.9155 21.2565 16.2016 21.375 16.5 21.375H20.25C20.5484 21.375 20.8345 21.2565 21.0455 21.0455C21.2565 20.8345 21.375 20.5484 21.375 20.25V16.5C21.375 16.2016 21.2565 15.9155 21.0455 15.7045C20.8345 15.4935 20.5484 15.375 20.25 15.375ZM3.75 8.625C4.04837 8.625 4.33452 8.50647 4.5455 8.2955C4.75647 8.08452 4.875 7.79837 4.875 7.5V4.875H7.5C7.79837 4.875 8.08452 4.75647 8.2955 4.5455C8.50647 4.33452 8.625 4.04837 8.625 3.75C8.625 3.45163 8.50647 3.16548 8.2955 2.9545C8.08452 2.74353 7.79837 2.625 7.5 2.625H3.75C3.45163 2.625 3.16548 2.74353 2.9545 2.9545C2.74353 3.16548 2.625 3.45163 2.625 3.75V7.5C2.625 7.79837 2.74353 8.08452 2.9545 8.2955C3.16548 8.50647 3.45163 8.625 3.75 8.625ZM7.875 6.75H16.125C16.4234 6.75 16.7095 6.86853 16.9205 7.0795C17.1315 7.29048 17.25 7.57663 17.25 7.875V16.125C17.25 16.4234 17.1315 16.7095 16.9205 16.9205C16.7095 17.1315 16.4234 17.25 16.125 17.25H7.875C7.57663 17.25 7.29048 17.1315 7.0795 16.9205C6.86853 16.7095 6.75 16.4234 6.75 16.125V7.875C6.75 7.57663 6.86853 7.29048 7.0795 7.0795C7.29048 6.86853 7.57663 6.75 7.875 6.75ZM9 15H15V9H9V15Z"
        fill="#072E28"
      />
    </svg>
  )
}

/** Mobile: single dark-green pill button with arrow */
function MobileScanButton() {
  return (
    <button
      type="button"
      className="flex items-center justify-center gap-2 transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      style={{
        width: '211px',
        height: '48px',
        paddingTop: '14px',
        paddingBottom: '14px',
        paddingLeft: '20px',
        paddingRight: '20px',
        borderRadius: '12px',
        backgroundColor: '#072E28',
      }}
      aria-label={HERO_ARIA.scanButton}
    >
      <span
        className="font-inter font-semibold leading-[20px]"
        style={{ fontSize: '16px', color: '#F9F9F9' }}
      >
        Scan my website
      </span>
      <span style={{ color: '#F9F9F9', fontSize: '18px' }}>→</span>
    </button>
  )
}

/** Desktop: green container with scan icon + label + dark scan button */
function DesktopScanForm() {
  return (
    <div
      className="flex items-center gap-4 rounded-xl"
      style={{
        width: '274px',
        height: '62px',
        padding: '8px',
        backgroundColor: '#A0E870',
      }}
      role="group"
      aria-label={HERO_ARIA.scanForm}
    >
      {/* Left: icon + label */}
      <div className="flex flex-1 items-center gap-2 pl-1">
        <span aria-label={HERO_ARIA.scanIcon}>
          <ScanIcon />
        </span>
        <span
          className="font-geist font-normal leading-[20px]"
          style={{
            fontSize: '15px',
            color: 'rgba(65, 65, 65, 0.95)',
            whiteSpace: 'nowrap',
          }}
        >
          {HERO_SCAN_BUTTON_TEXT}
        </span>
      </div>

      {/* Right: Scan button */}
      <button
        type="button"
        className="flex items-center justify-center rounded transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        style={{
          width: '83px',
          height: '46px',
          paddingTop: '13px',
          paddingBottom: '13px',
          paddingLeft: '10px',
          paddingRight: '10px',
          backgroundColor: '#072E28',
          borderRadius: '4px',
        }}
        aria-label={HERO_ARIA.scanButton}
      >
        <span
          className="font-inter font-semibold leading-[20px] text-white"
          style={{ fontSize: '16px' }}
        >
          {HERO_SCAN_ACTION_TEXT}
        </span>
      </button>
    </div>
  )
}

export function HeroScanForm() {
  return (
    <>
      {/* Mobile only */}
      <div className="flex justify-center md:hidden">
        <MobileScanButton />
      </div>
      {/* Desktop only */}
      <div className="hidden md:flex md:justify-center">
        <DesktopScanForm />
      </div>
    </>
  )
}

