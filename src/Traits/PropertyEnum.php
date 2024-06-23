<?php

namespace MaterialBlade\Traits;

use BackedEnum;

/**
 * Trait PropertyEnum
 * 
 * @template T of BackedEnum
 * @implements BackedEnum<T>
 */
trait PropertyEnum
{
    public static function fromString(string $value): static
    {
        $availableValues = static::getValues();

        if (in_array($value, $availableValues)) {
            return new static($value);
        }

        throw new \InvalidArgumentException('Invalid value \'' . $value  . '\' for ' . static::class . ' Expected one of: ' . implode(', ', $availableValues));
    }

    private static function getValues(): array
    {
        return array_map(fn (BackedEnum $case) => $case->value, static::cases());
    }
}
