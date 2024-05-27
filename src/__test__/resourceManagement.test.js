import { renderHook, act } from '@testing-library/react-hooks';
import { RecoilRoot } from 'recoil';
import { usePlayerActions } from '../utils/usePlayerActions';
import { waitFor } from '@testing-library/react';

describe('usePlayerActions 훅 테스트', () => {
  test('자원 추가 기능 테스트 (wood)', () => {
    const { result } = renderHook(() => usePlayerActions(), {
      wrapper: RecoilRoot,
    });

    act(() => {
      result.current.addResource('wood', 5);
    });

    expect(result.current.player1.wood).toBe(5);
  });

  test('자원 추가 기능 테스트 (food)', () => {
    const { result } = renderHook(() => usePlayerActions(), {
      wrapper: RecoilRoot,
    });

    act(() => {
      result.current.addResource('food', 3);
    });

    expect(result.current.player1.food).toBe(5); // 초기 food 값은 2
  });

  test('자원 감소 기능 테스트 (wood)', async () => {
    const { result } = renderHook(() => usePlayerActions(), {
      wrapper: RecoilRoot,
    });

    // 나무 추가
    act(() => {
      result.current.addResource('wood', 5);
      result.current.subtractResource('wood', 2);
    });

    // // Recoil 상태 업데이트 및 컴포넌트 리렌더링 대기
    // await waitFor(() => {
    //   expect(result.current.player1.wood).toBe(5);
    // });

    // // 나무 감소
    // act(() => {
    //   result.current.subtractResource('wood', 2);
    // });

    // // 다시 Recoil 상태 업데이트 및 컴포넌트 리렌더링 대기
    // await waitFor(() => {
    //   expect(result.current.player1.wood).toBe(3);
    // });

    expect(result.current.player1.wood).toBe(3);
  });

  test('자원 감소 기능 테스트 (food)', async () => {
    const { result } = renderHook(() => usePlayerActions(), {
      wrapper: RecoilRoot,
    });

    act(() => {
      result.current.addResource('food', 3);
      result.current.subtractResource('food', 4);
    });

    expect(result.current.player1.food).toBe(1);
  });

  test('자원이 부족할 때 감소 시도 시 에러 발생 테스트', () => {
    const { result } = renderHook(() => usePlayerActions(), {
      wrapper: RecoilRoot,
    });

    expect(() => {
      act(() => {
        result.current.subtractResource('wood', 1); // 초기 wood 값은 0
      });
    }).toThrowError('Not enough wood');
  });

  test('없는 자원을 추가하려고 할 때 에러 발생 테스트', () => {
    const { result } = renderHook(() => usePlayerActions(), {
      wrapper: RecoilRoot,
    });

    expect(() => {
      act(() => {
        result.current.addResource('stone', 1); // stone은 없는 자원
      });
    }).toThrowError('Invalid resource: stone');
  });
});
