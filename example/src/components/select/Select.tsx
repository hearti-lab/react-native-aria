//@ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import { useSelectState } from '@react-stately/select';
import type { AriaSelectOptions } from '@react-aria/select';
import { mergeProps } from '@react-aria/utils';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import {
  AriaButton,
  HiddenSelect,
  AriaView,
  useButton,
  FocusScope,
  useFocus,
  useListBox,
  useOption,
  useSelect,
  useHover,
} from 'react-native-aria';
import {
  Animated,
  Easing,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

export function Select(props: AriaSelectOptions) {
  let state = useSelectState(props);

  let ref = React.useRef();
  let layoutRef = React.useRef();
  let { labelProps, triggerProps, valueProps, menuProps } = useSelect(
    props,
    state,
    ref
  );

  const [positions, setPositions] = useState({
    top: 0,
    left: 0,
  });

  const onLayout = () => {
    layoutRef.current.measure((...args) => {
      setPositions({
        top:
          Platform.OS === 'web'
            ? args[args.length - 1] + args[3] + 10
            : args[args.length - 1] + 10,
        left: args[args.length - 2],
      });
    });
  };

  let { buttonProps } = useButton(triggerProps, ref);

  return (
    <View style={{ position: 'relative' }}>
      <View style={{ marginBottom: 10 }}>
        <Text {...labelProps}>{props.label}</Text>
      </View>
      <HiddenSelect
        state={state}
        triggerRef={ref}
        label={props.label}
        name={props.name}
      />
      <View onLayout={onLayout} ref={layoutRef}>
        <AriaButton {...buttonProps} ref={ref}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: 14,
              paddingHorizontal: 15,
              width: 250,
              paddingVertical: 6,
              borderWidth: 1,
              borderRadius: 5,
            }}
          >
            <Text {...valueProps}>
              {state.selectedItem
                ? state.selectedItem.rendered
                : 'Choose your favorite color'}
            </Text>
            <View aria-hidden="true" style={{ paddingLeft: 5 }}>
              {state.isOpen ? (
                <MaterialIcons
                  name="keyboard-arrow-up"
                  size={24}
                  color="#1F2937"
                />
              ) : (
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={24}
                  color="#1F2937"
                />
              )}
            </View>
          </View>
        </AriaButton>
      </View>

      <Modal visible={state.isOpen} onRequestClose={state.toggle} transparent>
        <TouchableWithoutFeedback
          onPress={state.toggle}
          accessible={false}
          importantForAccessibility={'no-hide-descendants'}
        >
          <View style={StyleSheet.absoluteFill}></View>
        </TouchableWithoutFeedback>
        <View
          style={{
            position: 'absolute',
            ...positions,
          }}
        >
          <ListBoxPopup {...menuProps} state={state} />
        </View>
      </Modal>
    </View>
  );
}

function ListBoxPopup({ state, ...otherProps }) {
  const scaleAnimations = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  let ref = React.useRef();
  let overlayRef = React.useRef();
  const [exp, setExp] = useState(false);
  let { listBoxProps } = useListBox(
    {
      autoFocus: state.focusStrategy || true,
      disallowEmptySelection: true,
      ...otherProps,
    },
    state,
    ref
  );

  useEffect(() => {
    Animated.timing(scaleAnimations, {
      toValue: 1,
      easing: Easing.ease,
      duration: 100,
      useNativeDriver: true,
    }).start();
  }, [scaleAnimations]);

  const transformStyle = [
    {
      scale: scaleAnimations,
    },
  ];

  return (
    <FocusScope restoreFocus>
      <AriaView {...mergeProps(listBoxProps, otherProps)} ref={ref}>
        <Animated.View
          style={{
            borderWidth: 1,
            borderColor: '#9CA3AF',
            // transform: transformStyle,
            opacity: scaleAnimations,
            borderRadius: 5,
          }}
        >
          {[...state.collection].map((item) => (
            <Option key={item.key} item={item} state={state} />
          ))}
        </Animated.View>
      </AriaView>
    </FocusScope>
  );
}

function Option({ item, state }) {
  let ref = React.useRef();
  let isDisabled = state.disabledKeys.has(item.key);
  let isSelected = state.selectionManager.isSelected(item.key);
  let { optionProps } = useOption(
    {
      key: item.key,
      isDisabled,
      isSelected,
      shouldSelectOnPressUp: true,
      shouldFocusOnHover: true,
    },
    state,
    ref
  );

  // Handle focus events so we can apply highlighted
  // style to the focused option
  let [isFocused, setFocused] = React.useState(false);
  let { focusProps } = useFocus({ onFocusChange: setFocused });
  const { hoverProps, isHovered } = useHover({});
  // console.log('hovering ', isHovered);

  return (
    <AriaButton
      {...mergeProps(optionProps, focusProps, hoverProps)}
      ref={ref}
      style={{
        backgroundColor: isFocused ? '#d1d5db' : 'transparent',
        borderRadius: 5,
        overflow: 'hidden',
      }}
    >
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: 250,
          alignItems: 'center',
        }}
      >
        <View style={{ color: '#1F2937', opacity: isDisabled ? 0.4 : 1 }}>
          {item.rendered}
        </View>

        {isSelected && <Ionicons name="checkmark" size={24} color="#1F2937" />}
      </View>
    </AriaButton>
  );
}