import test from 'node:test';
import assert from 'node:assert/strict';
import { 
  getSupplementById, 
  searchSupplements, 
  analyzeSupplementStack 
} from './checker';

test('getSupplementById returns expected supplement', () => {
  const d3 = getSupplementById('vitamina-d3');
  assert.ok(d3, 'Vitamina D3 should exist in database');
  assert.equal(d3?.name, 'Vitamina D3');
  assert.equal(d3?.category, 'vitamine');
});

test('searchSupplements filters by query and category', () => {
  const magnesiumResults = searchSupplements('magnesio');
  assert.ok(magnesiumResults.length >= 2, 'Should find at least 2 magnesium types');
  
  const nootropicCategory = searchSupplements('', 'nootropi');
  assert.ok(nootropicCategory.length >= 3, 'Should find multiple nootropics');
  assert.ok(nootropicCategory.every(s => s.category === 'nootropi'));
});

test('analyzeSupplementStack detects D3 + K2 positive synergy', () => {
  const analysis = analyzeSupplementStack(['vitamina-d3', 'vitamina-k2']);
  assert.equal(analysis.supplements.length, 2);
  assert.ok(analysis.synergiesFound.length >= 1, 'Should find at least 1 synergy between D3 and K2');
  
  const synergyNames = analysis.synergiesFound.map(s => s.synergy.targetSupplementName);
  assert.ok(
    synergyNames.some(name => name.includes('Vitamina K2') || name.includes('Vitamina D3')),
    'Should identify activation of osteocalcin/MGP synergy'
  );
  assert.equal(analysis.conflictsFound.length, 0, 'D3 and K2 should have no conflicts');
});

test('analyzeSupplementStack detects Iron + Calcium incompatibility', () => {
  const analysis = analyzeSupplementStack(['ferro-bisglicinato', 'calcio-citrato']);
  assert.ok(analysis.conflictsFound.length >= 1, 'Should find receptor DMT-1 competition conflict');
  assert.equal(analysis.conflictsFound[0].conflict.severity, 'critico');
});

test('analyzeSupplementStack warns on multiple high-risk liver compounds', () => {
  const analysis = analyzeSupplementStack(['berberina-hcl', 'egcg-te-verde']);
  assert.equal(analysis.liverAssessment.hasHighRiskCompounds, true);
  assert.ok(analysis.liverAssessment.hepaticLoadScore >= 5, 'Hepatic load score should be elevated');
  assert.ok(analysis.liverAssessment.warnings.length >= 1, 'Should emit explicit warning for liver load');
});

test('analyzeSupplementStack places supplements in distinct chrono-slots', () => {
  const analysis = analyzeSupplementStack([
    'nmn-nicotinamide', // morning fasting
    'vitamina-d3',      // breakfast with fats
    'melatonina'        // bedtime
  ]);
  
  const slotIds = analysis.chronoSchedule.map(s => s.slotId);
  assert.ok(slotIds.includes('mattina_digiuno'), 'NMN should be morning fasting');
  assert.ok(slotIds.includes('colazione_pasti'), 'D3 should be breakfast with fats');
  assert.ok(slotIds.includes('prima_dormire'), 'Melatonin should be bedtime');
});
