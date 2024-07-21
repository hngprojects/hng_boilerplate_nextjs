# Custom Button Component

## Usage

### Import the custom button component

```tsx
import CustomButton from "~/components/common/Button/button";
```

### Variant Props

```
"default"
"primary"
"destructive"
"subtle"
"loading"
"outline"
"link"
```

### Size Props

```
"default"
"sm"
"lg"
"link"
"icon"
"circle"
```

### Accepted Custom Button Props

```
- variant?: Variant
- size?: Size
- icon?: React.ReactNode
- children?: React.ReactNode
- isLoading?: boolean
- isIconOnly?: boolean
- isLeftIconVisible?: boolean
- isRightIconVisible?: boolean
- isDisabled?: boolean
- ariaLabel?: string
```

### Example

```tsx
return (
    <CustomButton
        variant="subtle"
        icon={<Plus />}
        isLeftIconVisible={true}
        isLoading={false}
        isDisabled={false}
    >
        Click Me
    </CustomButton>
);
```
