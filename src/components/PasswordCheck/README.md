# Password check Component

## Usage

```tsx
import PasswordCheck from "~/components/common/PasswordCheck/index";
```

### password Props

```
"password"
"minLength"
"onStrengthChange"
```

### Example

```tsx
return (
<PasswordCheck
        password="Password1@"
        minLength={8}
        onStrengthChange={handleStrengthChange}
      />
);
```
