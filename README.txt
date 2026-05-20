AI 복습 자료 관리 V4

반영 내용:
1. OCR 분석 후 바로 저장하지 않습니다.
2. OCR 분석 결과 과목을 사용자가 직접 수정할 수 있습니다.
3. 수정한 과목으로 최종 저장 버튼을 눌러 저장합니다.
4. 이미지 압축 품질을 높였습니다.
   - 기존보다 고화질: 긴 축 1800px, JPEG 품질 0.82
5. 펜 렉을 줄였습니다.
   - 원본 이미지 크기 canvas 사용 중단
   - 화면 표시 크기 기준 canvas 사용
   - stroke를 bitmap이 아니라 vector 좌표로 저장
   - requestAnimationFrame 적용
   - 너무 촘촘한 좌표는 자동 생략
6. 카드 이미지를 누르면 전체화면 보기 가능
7. 확대/축소/드래그/펜/되돌리기/지우기/저장 지원

GitHub Pages 반영:
- ZIP 압축 해제
- index.html, manifest.json, sw.js, icon-192.png, icon-512.png, README.txt를 저장소 root에 업로드
- Commit changes
- Safari에서 ?v=4 를 붙여 접속
- 홈화면 앱 삭제 후 다시 추가하면 캐시 문제를 줄일 수 있습니다.
