#!/bin/bash
# Test script for PHP polymorphism examples
# This script is executable - run with: ./test.sh

echo "Testing PHP polymorphism examples..."
echo ""

cd "$(dirname "$0")"

# Test polimorfizm_klasy.php
echo "Testing polimorfizm_klasy.php..."
if php polimorfizm_klasy.php > /dev/null 2>&1; then
    echo "✓ polimorfizm_klasy.php executed successfully"
else
    echo "✗ polimorfizm_klasy.php failed"
    exit 1
fi

# Test polimorfizm_interfejsy.php
echo "Testing polimorfizm_interfejsy.php..."
if php polimorfizm_interfejsy.php > /dev/null 2>&1; then
    echo "✓ polimorfizm_interfejsy.php executed successfully"
else
    echo "✗ polimorfizm_interfejsy.php failed"
    exit 1
fi

# Test polimorfizm_praktyczny.php
echo "Testing polimorfizm_praktyczny.php..."
if php polimorfizm_praktyczny.php > /dev/null 2>&1; then
    echo "✓ polimorfizm_praktyczny.php executed successfully"
else
    echo "✗ polimorfizm_praktyczny.php failed"
    exit 1
fi

# Test demo.php
echo "Testing demo.php..."
if php demo.php > /dev/null 2>&1; then
    echo "✓ demo.php executed successfully"
else
    echo "✗ demo.php failed"
    exit 1
fi

echo ""
echo "All tests passed successfully! ✓"
