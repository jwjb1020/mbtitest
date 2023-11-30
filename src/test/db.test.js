import pool from "@/db/config"

// 테스트 코드
  
  test('test connect', async () => {
    // 실제 MySQL 연결을 테스트하는 코드
    const result = await pool.query("SELECT 1");
    await pool.end()
    // 테스트 결과를 확인하거나 기대한 결과와 비교하는 코드를 추가할 수 있습니다.
    expect(result[0][0]).toEqual(expect.objectContaining({ '1': 1 }));
  });
