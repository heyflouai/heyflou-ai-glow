import React, { useState, useCallback } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { cn } from '@/lib/utils';

interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio' | 'hidden';
  value?: string | string[] | boolean;
  onChange?: (value: any) => void;
  onBlur?: () => void;
  error?: string;
  helpText?: string;
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  className?: string;
  disabled?: boolean;
  'aria-describedby'?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
  helpText,
  placeholder,
  required = false,
  options = [],
  className,
  disabled = false,
  'aria-describedby': ariaDescribedBy,
}) => {
  const [touched, setTouched] = useState(false);
  const fieldId = `field-${name}`;
  const errorId = `${fieldId}-error`;
  const helpId = `${fieldId}-help`;

  // Handle blur to mark field as touched for validation display
  const handleBlur = useCallback(() => {
    setTouched(true);
    onBlur?.();
  }, [onBlur]);

  // Only show error if field has been touched
  const showError = touched && error;

  // Common error/invalid styling
  const errorInputClasses = showError 
    ? 'border-destructive focus:border-destructive focus:ring-destructive/30 ring-1 ring-destructive/20' 
    : '';

  if (type === 'hidden') {
    return (
      <input
        type="hidden"
        name={name}
        value={value as string}
        onChange={(e) => onChange?.(e.target.value)}
      />
    );
  }

  const renderInput = () => {
    switch (type) {
      case 'textarea':
        return (
          <Textarea
            id={fieldId}
            name={name}
            value={value as string || ''}
            onChange={(e) => onChange?.(e.target.value)}
            onBlur={handleBlur}
            placeholder={placeholder}
            disabled={disabled}
            className={cn(
              'min-h-24 resize-y transition-all duration-200',
              errorInputClasses,
              className
            )}
            aria-describedby={cn(
              showError && errorId,
              helpText && helpId,
              ariaDescribedBy
            )}
            aria-invalid={!!showError}
            required={required}
          />
        );

      case 'select':
        return (
          <Select
            value={value as string || ''}
            onValueChange={(val) => {
              onChange?.(val);
              setTouched(true);
            }}
            disabled={disabled}
            required={required}
          >
            <SelectTrigger
              id={fieldId}
              className={cn(
                'h-11 transition-all duration-200',
                errorInputClasses,
                className
              )}
              aria-describedby={cn(
                showError && errorId,
                helpText && helpId,
                ariaDescribedBy
              )}
              aria-invalid={!!showError}
              onBlur={handleBlur}
            >
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      case 'radio':
        return (
          <RadioGroup
            value={value as string || ''}
            onValueChange={(val) => {
              onChange?.(val);
              setTouched(true);
            }}
            disabled={disabled}
            className="space-y-2"
            aria-describedby={cn(
              showError && errorId,
              helpText && helpId,
              ariaDescribedBy
            )}
            aria-invalid={!!showError}
          >
            {options.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <RadioGroupItem value={option.value} id={`${fieldId}-${option.value}`} />
                <Label
                  htmlFor={`${fieldId}-${option.value}`}
                  className="text-sm font-normal text-foreground cursor-pointer"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        );

      case 'checkbox':
        if (Array.isArray(value)) {
          // Multiple checkboxes
          return (
            <div
              className="space-y-2"
              role="group"
              aria-labelledby={`${fieldId}-label`}
              aria-describedby={cn(
                showError && errorId,
                helpText && helpId,
                ariaDescribedBy
              )}
              aria-invalid={!!showError}
            >
              {options.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <Checkbox
                    id={`${fieldId}-${option.value}`}
                    checked={(value as string[]).includes(option.value)}
                    onCheckedChange={(checked) => {
                      setTouched(true);
                      const currentArray = value as string[] || [];
                      if (checked) {
                        onChange?.([...currentArray, option.value]);
                      } else {
                        onChange?.(currentArray.filter(v => v !== option.value));
                      }
                    }}
                    disabled={disabled}
                  />
                  <Label
                    htmlFor={`${fieldId}-${option.value}`}
                    className="text-sm font-normal text-foreground cursor-pointer"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          );
        } else {
          // Single checkbox
          return (
            <div className="flex items-start space-x-2">
              <Checkbox
                id={fieldId}
                checked={value as boolean || false}
                onCheckedChange={(checked) => {
                  setTouched(true);
                  onChange?.(checked);
                }}
                disabled={disabled}
                className={cn(
                  "mt-0.5 transition-all duration-200",
                  showError && "border-destructive"
                )}
                aria-describedby={cn(
                  showError && errorId,
                  helpText && helpId,
                  ariaDescribedBy
                )}
                aria-invalid={!!showError}
                required={required}
              />
              <Label
                htmlFor={fieldId}
                className={cn(
                  "text-sm font-normal cursor-pointer leading-relaxed",
                  showError ? "text-destructive" : "text-foreground"
                )}
              >
                {label}
              </Label>
            </div>
          );
        }

      default:
        return (
          <Input
            id={fieldId}
            name={name}
            type={type}
            value={value as string || ''}
            onChange={(e) => onChange?.(e.target.value)}
            onBlur={handleBlur}
            placeholder={placeholder}
            disabled={disabled}
            className={cn(
              'h-11 transition-all duration-200',
              errorInputClasses,
              className
            )}
            aria-describedby={cn(
              showError && errorId,
              helpText && helpId,
              ariaDescribedBy
            )}
            aria-invalid={!!showError}
            required={required}
          />
        );
    }
  };

  return (
    <div className="space-y-2">
      {type !== 'checkbox' || Array.isArray(value) ? (
        <Label
          htmlFor={type === 'checkbox' && Array.isArray(value) ? undefined : fieldId}
          id={type === 'checkbox' && Array.isArray(value) ? `${fieldId}-label` : undefined}
          className={cn(
            "text-sm font-medium transition-colors",
            showError ? "text-destructive" : "text-foreground"
          )}
        >
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </Label>
      ) : null}

      {renderInput()}

      {helpText && !showError && (
        <p id={helpId} className="text-xs text-muted-foreground">
          {helpText}
        </p>
      )}

      {showError && (
        <p
          id={errorId}
          className="text-xs text-destructive flex items-center gap-1 animate-fade-in"
          role="alert"
          aria-live="polite"
        >
          <span className="inline-block w-1 h-1 rounded-full bg-destructive shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
};